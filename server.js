#!/usr/bin/env node

import express from 'express';
import minimist from 'minimist';
import { roll } from './lib/roll.js';

const app = express();
const args = minimist(process.argv.slice(2));
const port = args.port || 5000;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.listen(port);

  app.get('/app/', (req, res) => {
    res.send("200 OK");
  });

  app.get("/app/roll/", (req, res) => {
    let sides = 6;
    let dice = 2;
    let rolls = 1;
    console.log(roll(sides, dice, rolls));
    res.send(roll(sides, dice, rolls));
  });

  app.post('/app/roll/', (req, res) => {
    let sides = parseInt(req.body.sides);
    let dice = parseInt(req.body.dice);
    let rolls = parseInt(req.body.rolls);
    console.log(roll(sides, dice, rolls));
    res.send(roll(sides, dice, rolls));
  });

  app.get('/app/roll/:sides/', (req, res) => {
    let sides = parseInt(req.params.sides);
    let dice = 2;
    let rolls = 1;
    console.log(roll(sides, dice, rolls));
    res.send(roll(sides, dice, rolls));
  });

  app.get('/app/roll/:sides/:dice/', (req, res) => {
    let sides = parseInt(req.params.sides);
    let dice = parseInt(req.params.dice);
    let rolls = 1;
    console.log(roll(sides, dice, rolls));
    res.send(roll(sides, dice, rolls));
  });

  app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
    let sides =  parseInt(req.params.sides);
    let dice = parseInt(req.params.dice);
    let rolls = parseInt(req.params.rolls);
    console.log(roll(sides, dice, rolls));
    res.send((roll(sides, dice, rolls)));
  });

  app.get("*", (req, res) => {
    res.status(404).send("404 NOT FOUND");
  });
