function toggle () {
  document.getElementById('arrow').classList.toggle('show-arrow')
  document.getElementById('profile').classList.toggle('show')
}

function send () {
  const date = Date.now()
  const link = document.getElementById('link').value
  const name = document.getElementById('name').value
  const avatar = document.getElementById('avatar').value
  var message = document.getElementById('message').value

  if (!link) {
    new Noty({
      type: 'error',
      text: `Provide a valid webhook link`,
      animation: {
        open: function (promise) {
          var n = this
          new Bounce()
            .translate({
              from: { x: 450, y: 0 },
              to: { x: 0, y: 0 },
              easing: 'bounce',
              duration: 1000,
              bounces: 4,
              stiffness: 3
            })
            .scale({
              from: { x: 1.2, y: 1 },
              to: { x: 1, y: 1 },
              easing: 'bounce',
              duration: 1000,
              delay: 100,
              bounces: 4,
              stiffness: 1
            })
            .scale({
              from: { x: 1, y: 1.2 },
              to: { x: 1, y: 1 },
              easing: 'bounce',
              duration: 1000,
              delay: 100,
              bounces: 6,
              stiffness: 1
            })
            .applyTo(n.barDom, {
              onComplete: function () {
                promise(function (resolve) {
                  resolve()
                })
              }
            })
        },
        close: function (promise) {
          var n = this
          new Bounce()
            .translate({
              from: { x: 0, y: 0 },
              to: { x: 450, y: 0 },
              easing: 'bounce',
              duration: 500,
              bounces: 4,
              stiffness: 1
            })
            .applyTo(n.barDom, {
              onComplete: function () {
                promise(function (resolve) {
                  resolve()
                })
              }
            })
        }
      }
    }).show()
    return
  }

  if (!message) {
    new Noty({
      type: 'error',
      text: `Provide a webhook message`,
      animation: {
        open: function (promise) {
          var n = this
          new Bounce()
            .translate({
              from: { x: 450, y: 0 },
              to: { x: 0, y: 0 },
              easing: 'bounce',
              duration: 1000,
              bounces: 4,
              stiffness: 3
            })
            .scale({
              from: { x: 1.2, y: 1 },
              to: { x: 1, y: 1 },
              easing: 'bounce',
              duration: 1000,
              delay: 100,
              bounces: 4,
              stiffness: 1
            })
            .scale({
              from: { x: 1, y: 1.2 },
              to: { x: 1, y: 1 },
              easing: 'bounce',
              duration: 1000,
              delay: 100,
              bounces: 6,
              stiffness: 1
            })
            .applyTo(n.barDom, {
              onComplete: function () {
                promise(function (resolve) {
                  resolve()
                })
              }
            })
        },
        close: function (promise) {
          var n = this
          new Bounce()
            .translate({
              from: { x: 0, y: 0 },
              to: { x: 450, y: 0 },
              easing: 'bounce',
              duration: 500,
              bounces: 4,
              stiffness: 1
            })
            .applyTo(n.barDom, {
              onComplete: function () {
                promise(function (resolve) {
                  resolve()
                })
              }
            })
        }
      }
    }).show()
    return
  }

  if (message.length > 2000) {
    message = message.substring(0, 2000)
  }

  $.ajax({
    type: 'POST',
    url: link,
    data: { content: message, username: name, avatar_url: avatar }
  })
    .done(function (response) {
      new Noty({
        type: 'success',
        text: `Successfully sent webhook in ${Date.now() - date}ms`,
        timeout: 1000,
        animation: {
          open: function (promise) {
            var n = this
            new Bounce()
              .translate({
                from: { x: 450, y: 0 },
                to: { x: 0, y: 0 },
                easing: 'bounce',
                duration: 1000,
                bounces: 4,
                stiffness: 3
              })
              .scale({
                from: { x: 1.2, y: 1 },
                to: { x: 1, y: 1 },
                easing: 'bounce',
                duration: 1000,
                delay: 100,
                bounces: 4,
                stiffness: 1
              })
              .scale({
                from: { x: 1, y: 1.2 },
                to: { x: 1, y: 1 },
                easing: 'bounce',
                duration: 1000,
                delay: 100,
                bounces: 6,
                stiffness: 1
              })
              .applyTo(n.barDom, {
                onComplete: function () {
                  promise(function (resolve) {
                    resolve()
                  })
                }
              })
          },
          close: function (promise) {
            var n = this
            new Bounce()
              .translate({
                from: { x: 0, y: 0 },
                to: { x: 450, y: 0 },
                easing: 'bounce',
                duration: 500,
                bounces: 4,
                stiffness: 1
              })
              .applyTo(n.barDom, {
                onComplete: function () {
                  promise(function (resolve) {
                    resolve()
                  })
                }
              })
          }
        }
      }).show()
    })
    .fail(function (xhr, status, message) {
      if (xhr.status === 429) {
        Swal.fire({
          icon: 'error',
          title: '429 - Too many requests',
          text: 'You are being ratelimited, try again later'
        })

        return
      }
      new Noty({
        type: 'error',
        text: JSON.stringify(xhr.responseText),
        timeout: 5000,
        animation: {
          open: function (promise) {
            var n = this
            new Bounce()
              .translate({
                from: { x: 450, y: 0 },
                to: { x: 0, y: 0 },
                easing: 'bounce',
                duration: 1000,
                bounces: 4,
                stiffness: 3
              })
              .scale({
                from: { x: 1.2, y: 1 },
                to: { x: 1, y: 1 },
                easing: 'bounce',
                duration: 1000,
                delay: 100,
                bounces: 4,
                stiffness: 1
              })
              .scale({
                from: { x: 1, y: 1.2 },
                to: { x: 1, y: 1 },
                easing: 'bounce',
                duration: 1000,
                delay: 100,
                bounces: 6,
                stiffness: 1
              })
              .applyTo(n.barDom, {
                onComplete: function () {
                  promise(function (resolve) {
                    resolve()
                  })
                }
              })
          },
          close: function (promise) {
            var n = this
            new Bounce()
              .translate({
                from: { x: 0, y: 0 },
                to: { x: 450, y: 0 },
                easing: 'bounce',
                duration: 500,
                bounces: 4,
                stiffness: 1
              })
              .applyTo(n.barDom, {
                onComplete: function () {
                  promise(function (resolve) {
                    resolve()
                  })
                }
              })
          }
        }
      }).show()
    })
}


$(document).ready(function () {
  Swal.fire('Notice', 'This webhook sender was just made for fun.<br> Do not abuse it / use it for harm.<br>I am not responsible for any of your actions,', 'info')
})