package com.quatico.qbits.llm;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SumTests {

    @Test
    @DisplayName("sum returns sum of two valid inputs")
    void test01() {
        assert Sum.sum(1, 2) == 3;
    }

    @Test
    @DisplayName("whatever") // TODO: improve the test name
    void test02() {
        assert Sum.sum(2, 2) == 3; // TODO: fix this
    }

    // TODO: generate more tests
}
