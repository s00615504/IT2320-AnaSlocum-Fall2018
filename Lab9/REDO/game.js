let objects = ['comment', 'comment', 'bank', 'bank', 'puzzle-piece', 'puzzle-piece', 'child', 'child', 'heart', 'heart', 'star', 'star', 'bell', 'bell', 'asterisk', 'asterisk'],

    $game = $('.game'),
    $shuffle = $('.shuffle'),
    $deck = $('.deck'),
    $modal1 = $('.congratulations')

    allOpen = [],
    wait = 1000,
    totalCard = objects.length / 2;

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function init() {
    let allCards = shuffle(objects);
    $deck.empty();
    match = 0;
    for (let i = 0; i < allCards.length; i++) {
        $deck.append($('<li class="card"><i class="fa fa-' + allCards[i] + '"></i></li>'))
    }
    addCardListener();
}

function gameOver() {
    $('#popup').modal('toggle');
}

$shuffle.bind('click', function (confirmed) {
    if (confirmed) {
        init();
    }
});

let addCardListener = function () {
    $deck.find('.card').bind('click', function () {
        let $this = $(this);

        if ($this.hasClass('show') || $this.hasClass('match')) { return true; }

        let card = $this.context.innerHTML;
        $this.addClass('open show');
        allOpen.push(card);

        if (allOpen.length > 1) {
            if (card === allOpen[0]) {
                $deck.find('.open').addClass('match');
                setTimeout(function () {
                    $deck.find('open').removeClass('open show');
                }, wait);
                match++;
            } else {
                $deck.find('.open').addClass('notmatch');
                setTimeout(function () {
                    $deck.find('.open').removeClass('open show');
                    alert("Sorry! Not a match!");
                }, wait / 1.5);
            }
            allOpen = [];
        }
        if (totalCard === match) {
            setTimeout(function () {
                gameOver();
            }, 500);
        }
    });
}

init();