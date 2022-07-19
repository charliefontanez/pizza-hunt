const { Schema, model } = require('mongoose');

const PizzaSchema = new Schema(
  {
    pizzaName: {
      type: String
    },
    createdBy: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    size: {
      type: String,
      default: 'Large'
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
      }
    ],
    toppings: []
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false
  }
);

PizzaSchema.virtual('commentCount').get(function() {
  return this.comments.length;
});

const Pizza = model('Pizza', PizzaSchema);

module.exports = Pizza;