export const addAdminToLocalStorage = (admin) => {
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getAdminFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('admin')) || null
}

export const deleteAdminFromLocalStorage = () => {
  localStorage.removeItem('admin')
}
