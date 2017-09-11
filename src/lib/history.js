export const baseVotes = [
  {"date":"2017-09-06","parties":{"M":"17","L":"5.1","C":"11.3","KD":"3.3","S":"30.4","V":"7","MP":"4.7","SD":"18.3","FI":"2.6"}},
  {"date":"2017-09-05","parties":{"M":"17","L":"5.1","C":"11.4","KD":"3.3","S":"30.4","V":"7","MP":"4.7","SD":"18.3","FI":"2.6"}},
  {"date":"2017-09-04","parties":{"M":"16.9","L":"5.2","C":"11.4","KD":"3.3","S":"30.3","V":"7","MP":"4.7","SD":"18.4","FI":"2.6"}},
  {"date":"2017-09-03","parties":{"M":"16.9","L":"5.2","C":"11.4","KD":"3.3","S":"30.3","V":"7","MP":"4.7","SD":"18.4","FI":"2.6"}},
  {"date":"2017-09-02","parties":{"M":"16.9","L":"5.2","C":"11.5","KD":"3.3","S":"30.2","V":"7","MP":"4.6","SD":"18.4","FI":"2.6"}},
  {"date":"2017-09-01","parties":{"M":"16.8","L":"5.2","C":"11.5","KD":"3.3","S":"30.2","V":"7","MP":"4.6","SD":"18.4","FI":"2.6"}},
  {"date":"2017-08-31","parties":{"M":"16.8","L":"5.2","C":"11.5","KD":"3.4","S":"30.2","V":"7","MP":"4.6","SD":"18.4","FI":"2.6"}},
  {"date":"2017-08-30","parties":{"M":"16.8","L":"5.3","C":"11.5","KD":"3.4","S":"30.1","V":"7","MP":"4.6","SD":"18.5","FI":"2.6"}}]

const fetchHistory = () => fetch('/polls').then(res => {
  return res.json()
}).catch(err => {
  return Promise.resolve(baseVotes)
})

export default {
  fetchHistory,
  baseVotes
}