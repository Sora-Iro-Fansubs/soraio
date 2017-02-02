/**
  * User model.
  */
var SoraBookshelf = require('../db/database'),
    Post = require('./post'),
    Role = require('./role'),
    User = SoraBookshelf.Model.extend({
      tableName: 'users',
      hasTimestamps: true,

      // Relation One-to-Many User-to-Posts.
      posts: function() {
        return this.hasMany(Post)
      },
      role: function() {
        return this.belongsTo(Role)
      }
    })

module.exports = SoraBookshelf.model('User', User)
