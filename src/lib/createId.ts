let id: number = parseInt(localStorage.getItem('maxId') || '0');

function createId() {
  id++;
  localStorage.setItem('maxId', id.toString());
  return id
}

export default createId;