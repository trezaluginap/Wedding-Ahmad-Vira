import { useState, useEffect } from 'react'
import type { Wish } from '../data/invitation'
import { supabase, isSupabaseConfigured } from '../lib/supabase'

const STORAGE_KEY = 'wedding_wishes_data'

const DEFAULT_WISHES: Wish[] = [
  {
    id: '1',
    name: 'Dimas Pratama',
    message: 'Selamat menempuh hidup baru Ahmad & Putri! Semoga sakinah mawaddah warahmah selamanya.',
    createdAt: 'Baru saja'
  },
  {
    id: '2',
    name: 'Siti Aisyah',
    message: 'Happy wedding! Bahagia selalu sampai kakek nenek ya.',
    createdAt: '1 jam yang lalu'
  }
]

function getLocalWishes(): Wish[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      const parsed = JSON.parse(stored)
      if (Array.isArray(parsed) && parsed.length > 0) return parsed
    }
  } catch {
    // ignore
  }
  return DEFAULT_WISHES
}

function formatRelativeTime(dateStr?: string) {
  if (!dateStr) return 'Baru saja'
  const diff = Date.now() - new Date(dateStr).getTime()
  const minutes = Math.floor(diff / 60000)
  if (minutes < 1) return 'Baru saja'
  if (minutes < 60) return `${minutes} mnt lalu`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours} jam lalu`
  const days = Math.floor(hours / 24)
  return `${days} hr lalu`
}

export function useWishes() {
  const [wishes, setWishes] = useState<Wish[]>(getLocalWishes)
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const client = supabase
    if (!isSupabaseConfigured || !client) {
      setWishes(getLocalWishes())
      return
    }

    const fetchWishes = async () => {
      setIsLoading(true)
      try {
        const { data, error } = await client
          .from('wishes')
          .select('*')
          .order('created_at', { ascending: false })

        if (error) {
          console.warn('Supabase fetch failed, fallback to local:', error.message)
          setWishes(getLocalWishes())
        } else if (data && data.length > 0) {
          setWishes(
            data.map((item) => ({
              id: String(item.id),
              name: item.name,
              message: item.message,
              createdAt: formatRelativeTime(item.created_at)
            }))
          )
        } else {
          setWishes(getLocalWishes())
        }
      } catch (err) {
        console.warn('Network error, fallback to local wishes:', err)
        setWishes(getLocalWishes())
      } finally {
        setIsLoading(false)
      }
    }

    fetchWishes()

    // Realtime listener
    const channel = client
      .channel('public:wishes')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'wishes' },
        (payload) => {
          const newRow = payload.new as { id: number; name: string; message: string; created_at: string }
          setWishes((prev) => [
            {
              id: String(newRow.id),
              name: newRow.name,
              message: newRow.message,
              createdAt: 'Baru saja'
            },
            ...prev
          ])
        }
      )
      .subscribe()

    return () => {
      client.removeChannel(channel)
    }
  }, [])

  const addWish = async (name: string, message: string) => {
    const client = supabase
    const localNewWish: Wish = {
      id: Date.now().toString(),
      name,
      message,
      createdAt: 'Baru saja'
    }

    // Selalu simpan ke local state terlebih dahulu agar user langsung melihat responnya
    const updated = [localNewWish, ...wishes]
    setWishes(updated)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    } catch {
      // ignore
    }

    if (!isSupabaseConfigured || !client) {
      return true
    }

    try {
      setIsSubmitting(true)
      const { error } = await client.from('wishes').insert([{ name, message }])
      if (error) {
        console.warn('Gagal insert ke Supabase:', error.message)
      }
      return true
    } catch (err) {
      console.warn('Gagal insert ke Supabase:', err)
      return true
    } finally {
      setIsSubmitting(false)
    }
  }

  return { wishes, addWish, isLoading, isSubmitting }
}
