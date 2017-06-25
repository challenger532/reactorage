# import

```javascript
  import _r from 'reactorage'
```

# usage

## set
```javascript
  // (path, value)
  _r.set('user', 'wassim')
  //  --> true

  // (path, value)
  _r.set('account.user.name', 'wassim')
  //  --> true

  // (path, value)
  _r.set('data.user', {
    name:'wassim,'
    email: 'www@wass.safd'
   })
  //  --> true

  // (object)
  // ({key1:value1, key2, value2,...})
  // usage of deep merge
  _r.set({
    'account.user.name': 'wassim',
    'account.user.family': 'sabbagh',
    'account.data': {data: 5},
  })
  //  --> true

```

### get
```javascript

  // (path)
  _r.get('user')
  // --> wassim

  // (path)
  _r.get('account.user.name')
  // --> wassim

  // (many paths)
  _r.get(['account.user.name', 'account.user.emai'])
  // --> [wassim, wassim@sowlutio...]

  // (many paths)
  _r.get('account.user.name', 'account.user.emai')
  // --> [wassim, wassim@sowlutio...]

  // (many paths) => keys detect shape of response
  _r.get({
    'name': 'account.user.name',
    'family': 'account.user.family',
    'account.data': {items: 5},
  })
  // --> {
  //  name: 'ali',
  //  family: 'ayyyyyyyyad',
  //  account: {
  //     data: {
  //       data :5
  //     }
  //  }
  // }
```

### delete
```javascript

  // (path)
  _r.delete('user')

  // (path)
  _r.delete('account.user')

  // (many paths)
  _r.delete('account.user', 'data')

```

### has
```javascript
// same as get.. but returnee value will converted to booleans,
//  instead of the existed values
```

### is
```javascript
// same as get.. but returnee value will be passed to the specific function (izz lib) then  booleans will be returned like,
//  instead of the existed values

_r.is('user.name', 'not.empty')
_r.is('user.email', 'not.email')
// of
_r.is.not('user.name', 'empty')// of may be _r.not(... ) .. without is.not
```

### is
```javascript
// same as get.. but returnee value will be passed to the specific function (izz lib) then  booleans will be returned like,
//  instead of the existed values

_r.is('user.name', 'not.empty')
_r.is('user.email', 'not.email')
// of
_r.is.not('user.name', 'empty')// of may be _r.not(... ) .. without is.not

```

### sync
```javascript
// which means sync now// force save immediatele
//  to storage and don't wait debounce time(react native stuff)
_r.sync().then(success => console.log(success))
// => true
```
### async
```javascript
// conatines all the methods above..
//  works async instead.. return promise that returns only
//  after react save to storage done
  _r.async.get('user').then(user => console.log(user))
  // all other get apis above are valid here

  _r.async.set('user').then(success => console.log(success))
  // => true
```

### specific for react-native

```javascript
  // wait until restore data from localstorage
  _r.native.initialize().then(response => console.log(res))
  // --> 'string'
```
