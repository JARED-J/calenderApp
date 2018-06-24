const router = require('express').Router();
const {Event} = require('../db/models');

module.exports = router;

// `api/events/`
router.get('/', (req, res, next) => {
    Event.findAll({})
    .then(events => res.json(events))
    .catch(next);
});

// `api/events/`
router.post('/', (req, res, next) => {
    Event.create(req.body)
    .then(station => {
        res.json(station);
    })
    .catch(next);
});

// `api/events/:id`
router.put('/:id', (req, res, next) => {
    Event.findById(+req.params.id)
    .then(station => {
        return station.update(req.body);
    })
    .then(updatedStation => {
        res.json(updatedStation);
    })
    .catch(next);
});

// `api/events:id`
router.delete('/:id', (req, res, next) => {
    Event.destroy({
      where: {
          id: +req.params.id
        }
    })
    .then(status => res.status(201).json({
        error: false,
        message: 'Event has been deleted.'
    }))
        .catch(error => res.json({
        error: error
    }));
  })
