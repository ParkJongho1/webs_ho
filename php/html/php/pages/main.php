<?php
    include "../connect/connect.php"; 
    include "../connect/session.php";
?>


<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP 사이트</title>
</head>

    <!-- style -->
    <?php
        include "../include/style.php";
    ?>
    <!-- //style -->
    <style>
        .footer {
            background: #f5f5f5;
        }
    </style>
<body>
     <!-- header -->
    <?php
        include "../include/header.php";
    ?>
    <!-- //header -->

    <main id="contents">
    <h2 class="ir_so">컨텐츠 영역</h2>
        <section id="blog-type" class="section center type">
            <div class="container">
                <h3 class="section__title">축구 블로그</h3>
                <p class="section__desc">축구와 관련된 블로그입니다. 다양한 정보를 확인하세요!</p> 
                <div class="blog__inner">
                    <div class="blog__cont">                    
                        <?php
                            $sql = "SELECT * FROM myBlog ORDER BY blogID DESC LIMIT 3";
                            $result = $connect -> query($sql);
                        ?>
                        <?php foreach($result as $blog){ ?>
                                <article class="blog">
                                    <figuer class="blog__header">
                                        <a href="blogView.php?blogID=<?=$blog['blogID']?>" style="background-image:url(../assets/img/blog/<?=$blog['blogImgFile']?>)"></a>
                                    </figuer>
                                    <div class="blog__body">
                                        <span class="blog__cate"><?=$blog['blogCategory']?></span>
                                    <div class="blog__title"><?=$blog['blogTitle']?></div>
                                    <div class="blog__desc"><?=$blog['blogContents']?></div>
                                        <div class="blog__info">
                                            <span class="author"><a href="#"><?=$blog['blogAuthor']?></a></span>
                                            <span class="date"><?=date('Y-m-d H:i:s', $blog['blogRegTime'])?></span>
                                        </div>
                                    </div>
                                </article>
                        <?php } ?>
                    </div>
                    <div class="blog__btn">
                        <a href="#">더보기</a>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- footer -->
    <?php
        include "../include/footer.php";
    ?>
    <!-- //footer -->

</body>
</html>