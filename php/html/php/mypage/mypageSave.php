<?php
    include "../connect/connect.php";
    include "../connect/session.php";
    include "../connect/sessionCheck.php";
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $youEmail = $_POST['youEmail'];
        $youName = $_POST['youName'];
        $youBirth = $_POST['youBirth'];
        $youPhone = $_POST['youPhone'];
        $youPass = $_POST['youPass'];
        $memberID = $_SESSION['memberID'];
        $sql = "SELECT youPass, memberID FROM myMember WHERE memberID = {$memberID}";
        $result = $connect -> query($sql);
        if($result){
            $memberInfo = $result -> fetch_array(MYSQLI_ASSOC);
            //아이디 비밀번호 확인
            if($memberInfo['youPass'] == $youPass && $memberInfo['memberID'] == $memberID){
                //수정
                $sql = "UPDATE myMember SET youEmail = '{$youEmail}', youName = '{$youName}', youBirth = '{$youBirth}', youPhone = '{$youPhone}' WHERE memberID = '{$memberID}'";
                $connect -> query($sql);
            } else {
                echo "<script>alert('비밀번호가 일치하지 않습니다. 다시 한번 확인해 주세요.'); history.back(1)</script>";
            }
        }
    ?>
    <script>
        location.href = "../pages/main.php";
    </script>
</body>
</html>