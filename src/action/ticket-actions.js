import superagent from 'superagent'

//Admin Controls
export const createTicket = ticket => ({
  type: 'CREATE_TICKET',
  payload: ticket,
})

export const updateTicket = ticket => ({
  type: 'UPDATE_TICKET',
  payload: ticket,
})

export const deleteTicket = ticket => ({
  type: 'DELETE_TICKET',
  payload: ticket,
})

//user sell option
export const sellTicket = ticket => ({
  type: 'SELL_TICKET',
  payload: ticket,
})

export const createTicketReq = ticket => (dispatch, getState) => {
  return superagent.post(`${__API_URL__}/api/ticket`)
    .then(res => {
      dispatch(createTicket(res.body))
      return res      
    })
}

export const sellTicketReq = ticket => (dispatch, getState) => {
  return superagent.put(`${__API_URL__}/api/ticket/sell/${ticket._id}`)
    .then(res => {
      dispatch(sellTicket(ticket))
      return res      
    })
}

export const updateTicketReq = ticket => (dispatch, getState) => {
  return superagent.put(`${__API_URL__}/api/ticket/update/${ticket._id}`)
    .then(res => {
      dispatch(updateTicket(ticket))
      return res      
    })
}

export const deleteTicketReq = ticket => (dispatch, getState) => {
return superagent.delete(`${__API_URL__}/api/ticket/delete/${ticket._id}`)
    .then(res => {
      dispatch(deleteTicket(location))
      return res      
    })
}