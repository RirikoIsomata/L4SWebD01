//クリックで円が弾ける
// 配列
var particles = [];

//全体の初期化（最初に一回だけ呼ばれる）
function setup() {
    console.log("読み込まれたで");
  // キャンバスをつくる
  createCanvas(windowWidth, windowHeight);

  // 輪郭（りんかく）を消す
  noStroke();
}

// 計算と表示
function draw() {
  // 背景をぬりつぶす
  background(255);
    

  // 配列の長さだけ処理する
  for (var i = 0; i < particles.length; i++) {
    // 移動する
    particles[i].move();
    // 表示する
    particles[i].draw();

    // 消える時間になったら
    if (particles[i].lifetime < 0) {
      // 配列から消す
      particles.splice(i, 1);
    }
  }
    
    push();
      // 文字の色(円飛ばしたら見える感じ)
      fill(255);

      // フォント  
      textFont('M PLUS Rounded 1c, sans-serif');  

      // 文字のサイズ
      textSize(50);  

      // 文字の位置  
      textAlign(CENTER, CENTER);  

      text('Thank You!',width/2,height/2); 
    pop();
}

// マウスを押したら呼び出す
function mousePressed() {
    console.log("押されたで");
  // particles配列に40個追加する
  for (var i = 0; i < 30; i++) {
    particles.push(new Particle(mouseX, mouseY));
  }
}

// Particleクラス
class Particle {
    
  // 初期化
  constructor(x, y) {
    // 最初の位置（マウスクリックした位置）
    this.position = createVector(x, y);

    // 動き
    this.velocity = createVector(random(-3, 3), random(-3, -10));

    // 動きにランダムな数をかける
    this.velocity.mult(random(1, 5));

    // 円の色
    this.color = color(random(0,150), random(0,150), 255);

    // 表示される時間
    this.lifetime = 500;
  }

  // 移動
  move() {
      
    // 円が弾ける
    this.position.add(this.velocity);

    // 円が落下する
    this.velocity.y++;

    // 残りの時間をへらす
    this.lifetime--;
  }

  // 表示
  draw() {
     
    // ぬりつぶす
    fill(this.color);

    // 円を描く
    ellipse(this.position.x, this.position.y, 20);
  }
}
//クリックで円が弾ける　ここまで


//FAQ(Progate jQuery中級編より)
$(function() {

  $('#login-show').click(function() {
    $('#login-modal').fadeIn();
  });

  $('.signup-show').click(function() {
    $('#signup-modal').fadeIn();
  });

  $('.close-modal').click(function() {
    $('#login-modal').fadeOut();
    $('#signup-modal').fadeOut();
  });
  
  $('.lesson-hover').hover(
    function() {
      $(this).find('.text-contents').addClass('text-active'); 
    },
    function() {
      $(this).find('.text-contents').removeClass('text-active');
    }
  );

  // FAQのアコーディオン
  $('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) { 
      $answer.removeClass('open');
      // slideUpメソッドを用いて、$answerを隠してください
      $answer.slideUp();

      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find('span').text('+');
      
    } else {
      $answer.addClass('open'); 
      // slideDownメソッドを用いて、$answerを表示してください
      $answer.slideDown();
      
      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find('span').text('−');
      
    }
  });
});
