
document.getElementById('getResponse').onclick = function() {
  let category = '';
  let categoryNumber = '';

  category = document.getElementById('resources').value;
  categoryNumber = document.getElementById('textInput').value;

  fetch('http://jsonplaceholder.typicode.com/' + category + '/' + categoryNumber)
  .then(response => response.json())
  .then(data => {
    localStorage.clear();
    localStorage.setItem('setData', JSON.stringify(data));
    let dataFromLocalStorage = JSON.parse(localStorage.getItem('setData'));

    dataFromLocalStorage.length > 100 ? dataFromLocalStorage.pop() : dataFromLocalStorage;

    Array.isArray(dataFromLocalStorage) ? dataFromLocalStorage : dataFromLocalStorage = [dataFromLocalStorage];

    switch (category) {
      case 'posts':
      $('#example').DataTable({
        data: dataFromLocalStorage,
        columns: [{ data: 'userId' }, { data: 'id' }, { data: 'title' }, { data: 'body' }]
      });
        break;
      case 'comments':
        $('#example').DataTable({
          data: dataFromLocalStorage,
          columns: [{ data: 'postId' }, { data: 'id' }, { data: 'name' }, { data: 'email' }, { data: 'body' }]
        });
        break;
      case 'albums':
        $('#example').DataTable({
          data: dataFromLocalStorage,
          columns: [{ data: 'userId' }, { data: 'id' }, { data: 'title' }]
        });
        break;
      case 'photos':
        $('#example').DataTable({
          data: dataFromLocalStorage,
          columns: [{ data: 'albumId' }, { data: 'id' }, { data: 'title' }, { data: 'url'}, {data: 'thumbnailUrl'}]
        });
        break;
      case 'todos':
        $('#example').DataTable({
          data: dataFromLocalStorage,
          columns: [{ data: 'userId' }, { data: 'id' }, { data: 'title' }, { data: 'completed' }]
        });
        break;
      case 'users':
        $('#example').DataTable({
          data: dataFromLocalStorage,
          columns: [ { data: 'id' }, { data: 'name' }, { data: 'username' }, { data: 'email' }, { data: 'phone' }]
        });
        break;
    }
  })
}
