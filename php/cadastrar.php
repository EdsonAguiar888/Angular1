<?php

    //Incluir a conexao
    include("conexao.php");


    //Obter dados
    $obterDados = file_get_contents("php: //input");


    //Extrair os dados do JSON
    $extrair = json_decode($obterDados);


    //Separar os dados do JSON
    $nomeCurso = $extrair->cursos->nomeCurso;
    $valorCurso = $extrair->cursos->valorCurso;


    //sql
    $sql = "INSERT INTO cursos (nomeCurso, valorCurso) VALUES ('$nomeCurso', valorCurso)";
    mysqli_query($conexao, $sql);


    //Exportar os dados cadastrados
    $curso = [
        'nomeCurso' => $nomeCurso,
        'valorCurso' => $valorCurso
    ];

   

    json_encode(['curso'=>$curso]);


?>