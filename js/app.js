'use strict'

function Picture(image_url, title, description, keyword, horns) {
    this.image_url = image_url;
    this.title = title;
    this.description = description;
    this.keyword = keyword;
    this.hrons = horns
}


Picture.prototype.render = function () {
    // console.log(this)
    let wholeResult = $('<div> <h2></h2> <img/> <p></p> </div>').clone().addClass(this.keyword);
    wholeResult.find('h2').text(this.title);
    wholeResult.find('img').attr('src', this.image_url);
    wholeResult.find('p').text(this.description);
    $('main').append(wholeResult)
    
};
let option = []

Picture.prototype.makeOption = function () {
    if (!(option.includes(this.keyword))) {
        option.push(this.keyword)
        let new_option = '<option>' + this.keyword + '</option>'
        $('select').append(new_option)
    }

};



$.get('data/page-1.json', 'json')
    .then(data => {
        data.forEach(element => {
            let obj = new Picture(element.image_url, element.title, element.description, element.keyword, element.horns)
            // console.log(obj)
            obj.makeOption();
            obj.render();
            // console.log(Picture.prototype)  
        });

    })
$('#choice').change(function () {
    var new_select = $(this).children("option:selected").val();
    $('div').each(function () {
        if ($(this).attr('class') === new_select) {
            $(this).css('display', 'block')
        } else {
            $(this).css('display', 'none')
        }       
    })
})
