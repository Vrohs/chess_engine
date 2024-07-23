#include <iostream>
#include <bits/stdc++.h>

typedef unsigned long long int B_REP;

class BoardRep
{

        B_REP w_pawn,
            w_bishop,
            w_knight,
            w_rook,
            w_queen,
            w_king;

        B_REP b_pawn,
            b_bishop,
            b_knight,
            b_rook,
            b_queen,
            b_king;

        B_REP all_b,
            all_w,
            all_pieces;

        bool white_to_move;
        B_REP castling_rights, en_passant_target;
        int halfmove_clock;
        int fullmove_number;

public:
        void updateCombinedBitboards()
        {
                all_w = w_pawn | w_knight | w_bishop | w_rook | w_queen | w_king;
                all_b = b_pawn | b_knight | b_bishop | b_rook | b_queen | b_king;
                all_pieces = all_w | all_b;
        }

        void initializeStartingPosition()
        {
                w_pawn = 0x000000000000FF00ULL;
                w_knight = 0x0000000000000042ULL;
                w_bishop = 0x0000000000000024ULL;
                w_rook = 0x0000000000000081ULL;
                w_queen = 0x0000000000000008ULL;
                w_king = 0x0000000000000010ULL;

                b_pawn = 0x00FF000000000000ULL;
                b_knight = 0x4200000000000000ULL;
                b_bishop = 0x2400000000000000ULL;
                b_rook = 0x8100000000000000ULL;
                b_queen = 0x0800000000000000ULL;
                b_king = 0x1000000000000000ULL;

                updateCombinedBitboards();

                white_to_move = true;
                castling_rights = 0b1111;
                en_passant_target = 0ULL;
                halfmove_clock = 0;
                fullmove_number = 1;
        }
};