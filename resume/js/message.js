! function () {
    var view = document.querySelector('#messages');

    var model = {
        init: function () {
            var APP_ID = 'caqhKIo7XAUfUBR2CM9R2J0Y-gzGzoHsz';
            var APP_KEY = 'qFYXhtt6yn12nlK3b7G5Q68G';
            //var AV = require('leancloud-storage');
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
        },
        //获取数据
        fetch: function () {
            var query = new AV.Query('message');
            return query.find(); //promise对象
        },
        //创建数据
        save: function (owner, content) {
            var myMessage = AV.Object.extend('message');
            var saveMessages = new myMessage();
            return saveMessages.save({
                user: owner,
                words: content
            })
        }
    }

    var controller = {
        view: null,
        model: null,
        messageList: null,
        init: function (view, model) {
            this.view = view;
            this.model = model;

            this.messageList = view.querySelector('#message-list');
            this.form = view.querySelector('form');
            this.model.init();
            this.loadMessage();
            this.bindEvents();
        },
        loadMessage: function () {
            this.model.fetch().then(
                (messages) => {
                    let array = messages.map((item) => item.attributes);
                    array.forEach(
                        (item) => {
                            let li = document.createElement('li');
                            li.innerText = `${item.user}:${item.words}`;
                            this.messageList.append(li);
                        })
                },
                function (error) {
                    console.log(error);
                }).then(
                function () {},
                function (error) {
                    console.log(error)
                })
        },
        bindEvents: function () {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault();
                console.log(this)
                //如果不使用箭头函数则controller.saveMessage()
                this.saveMessage();
            })
        },
        saveMessage: function () {
            let myForm = this.form;
            let owner = myForm.querySelector('input[name=owner]').value;
            var content = myForm.querySelector('input[name=content]').value;
            this.model.save(owner, content).then(function (object) {
                let li = document.createElement('li');
                li.innerText = `${object.attributes.user}:${object.attributes.words}`;
                var messagelist = document.querySelector('#message-list');
                messagelist.append(li);
                messageform.querySelector('input[name=content]').value = '';
            })
        }
    }
    controller.init(view, model);
}.call()