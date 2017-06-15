import test from 'ava'
import flat from '../../src/flattern'
import SimpleXHR from '../../src'

test('simple parse', async t => {

  let source = {
    hey: 'test',
    goal: 'cant believe it',
    one: '4',
    two: '4.0',
    three: '4.4',
    four: '-4.4',
    five: 'true',
    six: [
      'heyyyyyy',
      'heyyy1',
      'hey2', {
        'o1': 'h2o',
        'o2': 'h2o2'
      }
    ],
    seven: {
      inside: 'hey',
      morelevel: {
        one: 'five'
      }
    },
    eight: {
      uri: 'test.image',
      inside: 'hey',
      type: 'image/jpeg'
    }
  }
  
  let result = []
  flat(source, {
    onValue: (key, value) => result.push({key, value}),
    files: true
  })

  t.deepEqual(result.length, 15)
})
