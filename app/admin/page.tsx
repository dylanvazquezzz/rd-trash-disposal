import { cookies } from 'next/headers'
import LoginScreen from './login'
import AdminClient from './AdminClient'

export const metadata = {
  title: 'Admin — R&D Trash',
  robots: { index: false, follow: false },
}

export default async function AdminPage() {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')
  const adminPin = process.env.ADMIN_PIN

  const isAuthenticated =
    session !== undefined &&
    adminPin !== undefined &&
    session.value === adminPin

  if (!isAuthenticated) {
    return <LoginScreen />
  }

  return <AdminClient />
}
