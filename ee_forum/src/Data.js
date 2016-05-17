const Data = {
  Users: [
    { id: 0 },
    { id: 1, name: 'John', password: 'john', pic: 'http://thisismykea2.s3.amazonaws.com/sites/default/files/designs/6995/mr-happy-1310118986.png'},
    { id: 2, name: 'Amy', password: 'amy', pic: 'http://i.imgur.com/tSfIYtw.png' },
  ],
  Posts: [
    { id: 0, op: 0, anony: 'Fool', time: '12:20', 
      title: 'Spam',
      content: 'Blah Blah Blah...', 
      up: 0, down: 102,},
    { id: 1, op: 2, anony: null, time: '3:12', 
      title: 'Good Content', 
      content: 'Good Good!', 
      up: 34, down: 1,},
  ],

}

module.exports = Data;