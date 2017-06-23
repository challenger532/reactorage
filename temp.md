# import

```javascript
  import _r from 'reactorage'
```

# usage

## url
```javascript
  _r.save('user', 'wassim')
  //  --> true

  _r.save('account.user.name', 'wassim')
  //  --> true

  // usage of deep merge
  _r.save('data.user', {
    name:'wassim,'
    email: 'www@wass.safd'
   })
  //  --> true

  // usage of deep merge
  _r.save({
    'account.user.name': 'wassim',
    'account.user.family': 'sabbagh',
    'account.data': {data: 5},
  })
  //  --> true


  _r.get(path|object{key:value}|[]|...)

  _r.get('user')
  // --> wassim

  _r.get('account.user.name')
  // --> wassim

  _r.get(['account.user.name', 'account.user.emai'])
  // --> [wassim, wassim@sowlutio...]

  _r.get('account.user.name', 'account.user.emai')
  // --> [wassim, wassim@sowlutio...]

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

  _r.delete('user')

  _r.delete('account.user')

  _r.delete('account.user', 'data')


  // save as get.. but instead of data.. get booleans
  _r.has('user')
  // --> true

  _r.is('user', 'string') // check docs of is_js
  // --> true

  _r.typeof('user')
  // --> 'string'
```

# react-native

```javascript
  _r.native.initialize().then(response => console.log(res))
  // --> 'string'
```
