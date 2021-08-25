
const express = require('express');
const { restart } = require('nodemon');

const mongoose = require('mongoose');


module.exports = (app)   {
    app.get('/', function(req, res) {
        res.render("index");
    });
    app.get('/article', function(req, res) {
        res.render("article");
    });
    app.get('/all-articles', function(req, res) {
        res.render("all-articles");
    });   
    app.get('/create', function(req, res) {
        res.render("create");
    });    
    app.get('/edit', function(req, res) {
        res.render("edit");
    });    
    app.get('/login', function(req, res) {
        res.render("login");
    });    
    app.get('/register', function(req, res) {
        res.render("register");
    });
    app.get('/search-results', function(req, res) {
        res.render("search-results");
    })
}