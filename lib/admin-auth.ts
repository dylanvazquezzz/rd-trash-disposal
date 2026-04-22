import { cookies } from 'next/headers'

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')
  const pin = process.env.ADMIN_PIN
  return !!(session && pin && session.value === pin)
}

export function unauthorizedResponse() {
  return Response.json({ error: 'Unauthorized' }, { status: 401 })
}
