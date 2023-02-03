<?php

    //Incluir a conexao
    include("conexao.php");


    //SQL
    $sql = "SELECT * FROM cursos";


    //Executar 
    $executar = mysqli_query($conexao, $sql);


    //Vetor
    $cursos = [];

    $indice = 0;

    //Laço
    while($linha = mysqli_fetch_assoc($executar)){

        $cursos[$indice]['idCursos'] = $linha['idCursos'];
        $cursos[$indice]['nomeCurso'] = $linha['nomeCurso'];
        $cursos[$indice]['valorCurso'] = $linha['valorCurso'];
        
        $indice++;
    }

    //Json
    json_encode(['cursos'=>$cursos]);

    //var_dump($cursos);

?>