$(document).ready(function() {

    feather.replace()
    $('div.post').each(function(key, item) {
        var rnd = Math.random()
        $(item).children('div.post__data').children('a').children('span.img').children('img').attr('src', 'https://i.pravatar.cc/64?u='+ rnd)
    });

    $('body').on('click', 'a.create__comment', function() {
        if ($(this).hasClass('active')) {
            $(this).parent().parent().next().slideUp()
            $(this).removeClass('active')
        }else {
            $(this).parent().parent().next().slideDown()
            $(this).addClass('active')
        }
    })

    $('body').on('click', 'a.see_all_comments', function() {

        if ($(this).hasClass('active')) {
            $(this).parent().parent().next().next().slideUp()
            $(this).html('See Replies')
            $(this).removeClass('active')
        }else {
            $(this).parent().parent().next().next().slideDown()
            $(this).html('Hide Replies')
            $(this).addClass('active')
        }

    })

    $('body').on('click', 'div.buttons a', function() {

        var comment = $(this).parent().prev().children('textarea').val()
        var element = `
        <div class="post">
        <div class="post__data">
            <a href="javascript:void(0)"><span class="img"><img src="https://i.pravatar.cc/64?u=2" alt=""><div class="status__bar" id="busy"></div></span> Ata AKSOY</a>
            
        </div>
        <div class="post__content">
            <p>`+comment+`</p>
        </div>
        <div class="post__footer">
            <div>
                <span>12 July 2022</span>
                <a href="javascript:void(0)" class="upvote" data-vote="210">Upvote (210)</a>
                <a class="create__comment" href="javascript:void(0)">Reply</a>
                <a class="see_all_comments active" href="javascript:void(0)">Hide replies</a>
            </div>
        </div>
        <div class="create__comment">
            <div class="text">
                <textarea name="" id="" cols="30" rows="10" placeholder="Enter your reply here"></textarea>
            </div>
            <div class="buttons">
                <a href="javascript:void(0)">Reply</a>
            </div>
        </div>
        <div class="post__comments">
        </div>
    </div>
        `

        $(this).parent().parent().next().append(element)
        $(this).parent().prev().children('textarea').val('')
    })

    $('body').on('click', 'a.upvote', function() {
        var vote = $(this).attr('data-vote')
        $(this).html('Upvote ('+(parseInt(vote) + 1)+')')
        $(this).attr('data-vote', (parseInt(vote) + 1))
    })
})