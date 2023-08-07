export const addAdminToLocalStorage = (admin) => {
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getAdminFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('admin')) || null
}

export const deleteAdminFromLocalStorage = () => {
  localStorage.removeItem('admin')
}

export const addSubToLocalStorage = (sub) => {
  localStorage.setItem('subscriber', JSON.stringify(sub))
}

export const getSubFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('subscriber')) || null
}

export const deleteSubFromLocalStorage = () => {
  localStorage.removeItem('subscriber')
}
