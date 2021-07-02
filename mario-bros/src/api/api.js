export const Api = {
  baseUrl: 'https://blue-backend-modulo4front.herokuapp.com',
  authorization: 'projeto_marioBros@gmail.com',

  createUrl: () => Api.baseUrl + '/',
  deleteOneUrl: id => Api.baseUrl + '/' + id,
  deleteAllUrl: () => Api.baseUrl + '/',
  readOneUrl: id => Api.baseUrl + '/' + id,
  readAllUrl: () => Api.baseUrl + '/',
  updateUrl: id => Api.baseUrl + '/' + id,

  buildApiGetRequest: link => {
    return fetch (link, {
      method: 'GET',
      headers: new Headers ({
        Authorization: Api.authorization
      })
    })
  },
  
  buildApiPostRequest: (link, body) => {
    return fetch (link, {
      method: 'POST',
      headers: new Headers({
        Authorization: Api.authorization,
        'Content-type' : 'application/json'
      }),
      body: JSON.stringify(body)
    })
  },

  buildApiPutRequest: (url, body) => {
    return fetch(url, {
      method: 'PUT',
      headers: new Headers({
        Authorization: Api.authorization,
        'Content-type':'application/json'
      }),
      body: JSON.stringify(body)
    })
  },

  buildApiDeleteRequest: link => {
    return fetch (link, {
      method: 'DELETE',
      headers: new Headers({
        Authorization: Api.authorization
      })
    })
  }

}