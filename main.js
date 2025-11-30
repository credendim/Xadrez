// Declaração do tabuleiro
let table = [['BR', 'BN', 'BB', 'BQ', 'BK', 'BB', 'BN', 'BR'],
            ['BP', 'BP', 'BP', 'BP', 'BP', 'BP', 'BP', 'BP'],
            ['--', '--', '--', '--', '--', '--', '--', '--'],
            ['--', '--', '--', '--', '--', '--', '--', '--'],
            ['--', '--', '--', '--', '--', '--', '--', '--'],
            ['--', '--', '--', '--', '--', '--', '--', '--'],
            ['WP', 'WP', 'WP', 'WP', 'WP', 'WP', 'WP', 'WP'],
            ['WR', 'WN', 'WB', 'WQ', 'WK', 'WB', 'WN', 'WR']];

// Função para imprimir o tabuleiro
function PrintTable () {
    for (let i = 0; i < table.length; i++ ) {
        console.log(line[i], `| ${table[i]}`);
    };
    console.log('   ________________________');
    console.log(`    ${column}`);
};

// Função para resgatar a peça de uma posição expecífica
// Declaração das variaveis para tranformar de indice para posição em xadrez
let line = [8, 7, 6, 5, 4, 3, 2, 1];
let column = ['A ', 'B ', 'C ', 'D ', 'E ', 'F ', 'G ', 'H '];

function ShowPiece (pieceLine, pieceColumn) {
    return table[pieceLine][pieceColumn];
};

function ReturnPieceLine (pieceLine) {
    return line.indexOf(pieceLine);
};

function ReturnPieceColumn (pieceColumn) {
    return column.indexOf(pieceColumn);
};

// ShowPiece (1, 'A');

// Movimento Peão
function WhitePawnMove (pieceLine, pieceColumn) {
    // Adiciona 'O', para indicar que pode se mover
    if (ShowPiece(pieceLine - 1, pieceColumn) == '--') {
        table[pieceLine - 1][pieceColumn] = 'O ';
    } // Adiciona 'X', para indicar que pode matar outra peça
    if (ShowPiece(pieceLine -1, pieceColumn - 1) != '--') {
        if (ShowPiece(pieceLine -1, pieceColumn - 1) == undefined) {
            console.log('Saiu do tabuleiro jao');
        } else {
            table[pieceLine - 1][pieceColumn - 1] = 'X ';
        }
    }
    if (ShowPiece(pieceLine -1, pieceColumn + 1) != '--') {
        if (ShowPiece(pieceLine -1, pieceColumn + 1) == undefined) {
            console.log('Saiu do tabuleiro jao');
        } else {
            table[pieceLine - 1][pieceColumn + 1] = 'X ';
        }
    }
    PrintTable();
};

function BlackPawnMove (pieceLine, pieceColumn) {
    // Adiciona 'O', para indicar que pode se mover
    if (ShowPiece(pieceLine + 1, pieceColumn) == '--') {
        table[pieceLine + 1][pieceColumn] = 'O ';
    } // Adiciona 'X', para indicar que pode matar outra peça
    if (ShowPiece(pieceLine + 1, pieceColumn - 1) != '--') {
        if (ShowPiece(pieceLine + 1, pieceColumn - 1) == undefined) {
            console.log('Saiu do tabuleiro jao');
        } else {
            table[pieceLine +  1][pieceColumn - 1] = 'X ';
        }
    }
    if (ShowPiece(pieceLine + 1, pieceColumn + 1) != '--') {
        if (ShowPiece(pieceLine + 1, pieceColumn + 1) == undefined) {
            console.log('Saiu do tabuleiro jao');
        } else {
            table[pieceLine +  1][pieceColumn + 1] = 'X ';
        }
    }
    PrintTable();
};  

// Movimento Torre 
function RookMove(pieceLine, pieceColumn) {
    // Movimento para cima
    // Verifica se o movimento saiu do tabuleiro, para assim quando der erro nao quebrar o código
    try {
        for (let i = 1;; i ++ ) {
            if (ShowPiece(pieceLine - i, pieceColumn) != '--') {
                table[pieceLine - i][pieceColumn] = 'X ';
                break;
            } else {
                table[pieceLine - i][pieceColumn] = 'O ';
            }
    }
    } catch (error) {
        console.log('Saiu do tabuleiro jao');
    }

    // Movimento para baixo
    try {
        for (let i = 1;; i ++ ) {
            if (ShowPiece(pieceLine + i, pieceColumn) != '--') {
                table[pieceLine + i][pieceColumn] = 'X ';
                break;
            } else {
                table[pieceLine + i][pieceColumn] = 'O ';
            }
    }
    } catch (error) {
        console.log('Saiu do tabuleiro jao');
    }

    // Movimento para esquerda
    for (let i = 1;; i ++ ) {
        if (ShowPiece(pieceLine, pieceColumn - i) != '--') {
            // Verifica se a movimentação saiu do tabuleiro para nao quebrar a matriz
            if (ShowPiece(pieceLine, pieceColumn - i) == undefined){
                console.log('Saiu do tabuleiro jao');
                break;
            }
            table[pieceLine][pieceColumn - i] = 'X ';
            break;
        } else {
            table[pieceLine][pieceColumn - i] = 'O ';
        }
    }

    // Movimento para direita
    for (let i = 1;; i ++ ) {
        if (ShowPiece(pieceLine, pieceColumn + i) != '--') {
            if (ShowPiece(pieceLine, pieceColumn + i) == undefined){
                console.log('Saiu do tabuleiro jao');
                break;
            }
            table[pieceLine][pieceColumn + i] = 'X ';
            break;
        } else {
            table[pieceLine][pieceColumn + i] = 'O ';
        }
    }
    PrintTable();
}

// Movimento Cavalo 
function KnightMove(pieceLine, pieceColumn) {
    // Movimento para cima
    // Faz um teste para caso a movimentação caia fora do tabuleiro ele nao quebre o código
    try {
        if (ShowPiece(pieceLine - 2, pieceColumn - 1) != '--') {
           table[pieceLine - 2][pieceColumn - 1] = 'X '; 
        } else {
           table[pieceLine - 2][pieceColumn - 1] = 'O ';  
        }
    } catch (error) {
        console.log('Saiu do tabuleiro jao');
    }
    try {
        if (ShowPiece(pieceLine - 2, pieceColumn + 1) != '--') {
            if (ShowPiece(pieceLine - 2, pieceColumn + 1) == undefined) {
                console.log('Saiu do tabuleiro jao');
            } else {
                table[pieceLine - 2][pieceColumn + 1] = 'X '; 
            }
        } else {
           table[pieceLine - 2][pieceColumn + 1] = 'O ';  
        }
    } catch (error) {
        console.log('Saiu do tabuleiro jao');
    }
    // Movimento para baixo
    try {
        if (ShowPiece(pieceLine + 2, pieceColumn - 1) != '--') {
            if (ShowPiece(pieceLine + 2, pieceColumn - 1) == undefined) {
                console.log('Saiu do tabuleiro jao');
            } else {
                table[pieceLine + 2][pieceColumn - 1] = 'X ';
            }
        } else {
           table[pieceLine + 2][pieceColumn - 1] = 'O ';  
        }
    } catch (error) {
        console.log('Saiu do tabuleiro jao');
    }
    try {
        if (ShowPiece(pieceLine + 2, pieceColumn + 1) != '--') {
            if (ShowPiece(pieceLine + 2, pieceColumn + 1) == undefined) {
                console.log('Saiu do tabuleiro jao');
            } else {
                table[pieceLine + 2][pieceColumn + 1] = 'X ';
            }
        } else {
           table[pieceLine + 2][pieceColumn + 1] = 'O ';  
        }
    } catch (error) {
        console.log('Saiu do tabuleiro jao');
    }
    // Movimento para esquerda
    try {
        if (ShowPiece(pieceLine + 1, pieceColumn - 2) != '--') {
           table[pieceLine + 1][pieceColumn - 2] = 'X '; 
        } else {
           table[pieceLine + 1][pieceColumn - 2] = 'O ';  
        }
    } catch (error) {
        console.log('Saiu do tabuleiro jao');
    }
    try {
        if (ShowPiece(pieceLine - 1, pieceColumn - 2) != '--') {
            if (ShowPiece(pieceLine - 1, pieceColumn - 2) == undefined) {
                console.log('Saiu do tabuleiro jao');
            } else {
                table[pieceLine - 1][pieceColumn - 2] = 'X '; 
            }
        } else {
           table[pieceLine - 1][pieceColumn - 2] = 'O ';  
        }
    } catch (error) {
        console.log('Saiu do tabuleiro jao');
    }
    // Movimento para direita
    try {
        if (ShowPiece(pieceLine + 1, pieceColumn + 2) != '--') {
            if (ShowPiece(pieceLine + 1, pieceColumn + 2) == undefined) {
                console.log('Saiu do tabuleiro jao');
            } else {
                table[pieceLine + 1][pieceColumn + 2] = 'X '; 
            }
        } else {
           table[pieceLine + 1][pieceColumn + 2] = 'O ';  
        }
    } catch (error) {
        console.log('Saiu do tabuleiro jao');
    }
    try {
        if (ShowPiece(pieceLine - 1, pieceColumn + 2) != '--') {
            if (ShowPiece(pieceLine - 1, pieceColumn + 2) == undefined) {
                console.log('Saiu do tabuleiro jao');
            } else {
                table[pieceLine - 1][pieceColumn + 2] = 'X ';
            }
        } else {
           table[pieceLine - 1][pieceColumn + 2] = 'O ';  
        }
    } catch (error) {
        console.log('Saiu do tabuleiro jao');
    }
    PrintTable();
}

// Movimento bispo
function BishopMove(pieceLine, pieceColumn) {
    // Movimento para diagonal cima, esquerda
    // Verifica se o movimento saiu do tabuleiro, para assim quando der erro nao quebrar o código
    try {
        for (let i = 1;; i ++ ) {
            if (ShowPiece(pieceLine - i, pieceColumn - i) != '--') {
                if (ShowPiece(pieceLine - i, pieceColumn - i) == undefined) {
                    console.log('Saiu do tabuleiro jao');
                    break;
                } else {
                    table[pieceLine - i][pieceColumn - i] = 'X ';
                }
                break;
            } else {
                table[pieceLine - i][pieceColumn - i] = 'O ';
            }
        }
    } catch (error) {
        console.log('Saiu do tabuleiro jao');
    }

    // Movimento para diagonal cima, direita
    try {
        for (let i = 1;; i ++ ) {
            if (ShowPiece(pieceLine - i, pieceColumn + i) != '--') {
                if (ShowPiece(pieceLine - i, pieceColumn + i) == undefined) {
                    console.log('Saiu do tabuleiro jao');
                    break;
                } else {
                    table[pieceLine - i][pieceColumn + i] = 'X ';
                }
                break;
            } else {
                table[pieceLine - i][pieceColumn + i] = 'O ';
            }
    }
    } catch (error) {
        console.log('Saiu do tabuleiro jao');
    }

    // Movimento diagonal baixo, esquerda
    try {
        for (let i = 1;; i ++ ) {
            if (ShowPiece(pieceLine + i, pieceColumn - i) != '--') {
                if (ShowPiece(pieceLine + i, pieceColumn - i) == undefined) {
                    console.log('Saiu do tabuleiro jao');
                    break;
                } else {
                    table[pieceLine + i][pieceColumn - i] = 'X ';
                }
                break;
            } else {
                table[pieceLine + i][pieceColumn - i] = 'O ';
            }
        }
    } catch (error) {
        console.log('Saiu do tabuleiro jao');
    }
        try {
        for (let i = 1;; i ++ ) {
            if (ShowPiece(pieceLine + i, pieceColumn + i) != '--') {
                if (ShowPiece(pieceLine + i, pieceColumn + i) == undefined) {
                    console.log('Saiu do tabuleiro jao');
                    break;
                } else {
                    table[pieceLine + i][pieceColumn + i] = 'X ';
                }
                break;
            } else {
                table[pieceLine + i][pieceColumn + i] = 'O ';
            }
        }
    } catch (error) {
        console.log('Saiu do tabuleiro jao');
    }
    PrintTable();
};

function QueenMove(pieceLine, pieceColumn) {
    // Movimento para cima
    // Verifica se o movimento saiu do tabuleiro, para assim quando der erro nao quebrar o código
    try {
        for (let i = 1;; i ++ ) {
            if (ShowPiece(pieceLine - i, pieceColumn) != '--') {
                table[pieceLine - i][pieceColumn] = 'X ';
                break;
            } else {
                table[pieceLine - i][pieceColumn] = 'O ';
            }
    }
    } catch (error) {
        console.log('Saiu do tabuleiro jao');
    }

    // Movimento para baixo
    try {
        for (let i = 1;; i ++ ) {
            if (ShowPiece(pieceLine + i, pieceColumn) != '--') {
                table[pieceLine + i][pieceColumn] = 'X ';
                break;
            } else {
                table[pieceLine + i][pieceColumn] = 'O ';
            }
    }
    } catch (error) {
        console.log('Saiu do tabuleiro jao');
    }

    // Movimento para esquerda
    for (let i = 1;; i ++ ) {
        if (ShowPiece(pieceLine, pieceColumn - i) != '--') {
            // Verifica se a movimentação saiu do tabuleiro para nao quebrar a matriz
            if (ShowPiece(pieceLine, pieceColumn - i) == undefined){
                console.log('Saiu do tabuleiro jao');
                break;
            }
            table[pieceLine][pieceColumn - i] = 'X ';
            break;
        } else {
            table[pieceLine][pieceColumn - i] = 'O ';
        }
    }

    // Movimento para direita
    for (let i = 1;; i ++ ) {
        if (ShowPiece(pieceLine, pieceColumn + i) != '--') {
            if (ShowPiece(pieceLine, pieceColumn + i) == undefined){
                console.log('Saiu do tabuleiro jao');
                break;
            }
            table[pieceLine][pieceColumn + i] = 'X ';
            break;
        } else {
            table[pieceLine][pieceColumn + i] = 'O ';
        }
    }
    // Movimento para diagonal cima, esquerda
    // Verifica se o movimento saiu do tabuleiro, para assim quando der erro nao quebrar o código
    try {
        for (let i = 1;; i ++ ) {
            if (ShowPiece(pieceLine - i, pieceColumn - i) != '--') {
                if (ShowPiece(pieceLine - i, pieceColumn - i) == undefined) {
                    console.log('Saiu do tabuleiro jao');
                    break;
                } else {
                    table[pieceLine - i][pieceColumn - i] = 'X ';
                }
                break;
            } else {
                table[pieceLine - i][pieceColumn - i] = 'O ';
            }
        }
    } catch (error) {
        console.log('Saiu do tabuleiro jao');
    }

    // Movimento para diagonal cima, direita
    try {
        for (let i = 1;; i ++ ) {
            if (ShowPiece(pieceLine - i, pieceColumn + i) != '--') {
                if (ShowPiece(pieceLine - i, pieceColumn + i) == undefined) {
                    console.log('Saiu do tabuleiro jao');
                    break;
                } else {
                    table[pieceLine - i][pieceColumn + i] = 'X ';
                }
                break;
            } else {
                table[pieceLine - i][pieceColumn + i] = 'O ';
            }
    }
    } catch (error) {
        console.log('Saiu do tabuleiro jao');
    }

    // Movimento diagonal baixo, esquerda
    try {
        for (let i = 1;; i ++ ) {
            if (ShowPiece(pieceLine + i, pieceColumn - i) != '--') {
                if (ShowPiece(pieceLine + i, pieceColumn - i) == undefined) {
                    console.log('Saiu do tabuleiro jao');
                    break;
                } else {
                    table[pieceLine + i][pieceColumn - i] = 'X ';
                }
                break;
            } else {
                table[pieceLine + i][pieceColumn - i] = 'O ';
            }
        }
    } catch (error) {
        console.log('Saiu do tabuleiro jao');
    }
    try {
        for (let i = 1;; i ++ ) {
            if (ShowPiece(pieceLine + i, pieceColumn + i) != '--') {
                if (ShowPiece(pieceLine + i, pieceColumn + i) == undefined) {
                    console.log('Saiu do tabuleiro jao');
                    break;
                } else {
                    table[pieceLine + i][pieceColumn + i] = 'X ';
                }
                break;
            } else {
                table[pieceLine + i][pieceColumn + i] = 'O ';
            }
        }
    } catch (error) {
        console.log('Saiu do tabuleiro jao');
    }
    PrintTable();
};

function KingMove(pieceLine, pieceColumn) {

};