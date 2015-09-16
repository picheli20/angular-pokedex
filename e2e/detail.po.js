'use strict';

var detail = function() {
    this.commentField = {
        "name" : element(by.css('.form .form-group input[ng-model=\'comment.model.name\']')),
        "email" : element(by.css('.form .form-group input[ng-model=\'comment.model.email\']')),
        "comment" : element(by.css('.form .form-group textarea')),
        'confirm' : element(by.css('.form .btn-default'))
    };

    this.comments = element.all(by.css('h4.media-heading'));

    this.lastComment = null;

    this.checkLastComment = function(isEquals){
        if(isEquals){
            expect(this.comments.get(0).getText()).toContain(this.lastComment);
        }else{
            if(this.lastComment === ""){
                expect(this.comments.get(0).getText()).not.toEqual(this.lastComment);
            }else{
                expect(this.comments.get(0).getText()).not.toContain(this.lastComment);
            }
        }
    };

    this.sendComment = function(name, email, comment){
        this.commentField.name.sendKeys(name);
        this.commentField.email.sendKeys(email);
        this.commentField.comment.sendKeys(comment);
        this.commentField.confirm.click();
        browser.waitForAngular();

        this.lastComment = name;

        return name;
    };

    this.setDate = function(date){
        if(date) this.date = date;
        else this.date = new Date();
    };
};

module.exports = new detail();
