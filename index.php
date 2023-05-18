<?php
    $DATA = json_decode(file_get_contents('php://input'), true);
    $METHOD = $_SERVER['REQUEST_METHOD'];
    $HEADER = apache_request_headers();
    echo json_encode($HEADER);
    