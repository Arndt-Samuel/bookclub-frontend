import { api } from 'services/api'

export const addBookToFavorite = (data) =>
  api.post('/userbook', data, {
    headers: {
      Authorization: `bearer ${localStorage.getItem('@bookclub_token')}`
    }
  })

export const deleteBookFromFavorites = (id) =>
  api.delete(`/userbook/${id}`, {
    headers: {
      Authorization: `bearer ${localStorage.getItem('@bookclub_token')}`
    }
  })
