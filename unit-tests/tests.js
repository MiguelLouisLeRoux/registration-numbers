describe ("Registration Numbers", function(){
    describe ("Should be able to accept registration numbers with three different formats", function(){
        it('Should be able to accept registration numbers with space seperation format (e.g CY 234 567)', function(){

            var regTests = regFactFunc();

            regTests.getRegNum('CA 123 456');

            assert.equal('CA 123 456', regTests.testRegNum());
        })

        it('Should be able to accept registration numbers with hyphen seperation format (e.g CA-123-456)', function(){

            var regTests = regFactFunc();

            regTests.getRegNum('CY-555-777');

            assert.equal('CY-555-777', regTests.testRegNum());
        })

        it('Should be able to accept registration numbers with one space seperation followed by six digits format (e.g CJ 345678)', function(){

            var regTests = regFactFunc();

            regTests.getRegNum('CJ 333444');

            assert.equal('CJ 333444', regTests.testRegNum());
        })
    })

    describe ("Should be able to stored and filter registration numbers", function(){
        it('Should be able return a list of all registration numbers added', function(){

            var regTests = regFactFunc();

            regTests.getRegNum('CA 987 654');
            regTests.testRegNum();
            regTests.getRegNum('CY-937-694');
            regTests.testRegNum();
            regTests.getRegNum('CJ 333654');
            regTests.testRegNum();

            assert.deepEqual(['CA 987 654', 'CY-937-694', 'CJ 333654'], regTests.values().theArr);
        })

        it('Should be able return a list of all Cape Town registration numbers added', function(){

            var regTests = regFactFunc();

            regTests.getRegNum('CA 987 654');
            regTests.testRegNum();
            regTests.getRegNum('CY-937-694');
            regTests.testRegNum();
            regTests.getRegNum('CJ 333654');
            regTests.testRegNum();
            regTests.getRegNum('CA 127 374');
            regTests.testRegNum();
            regTests.getRegNum('CY 944 114');
            regTests.testRegNum();
            regTests.getRegNum('CA 327 124');
            regTests.testRegNum();

            assert.deepEqual(['CA 987 654', 'CA 127 374', 'CA 327 124'], regTests.filtering("capetown"));
        })

        it('Should be able return a list of all Stellenbosch registration numbers added', function(){

            var regTests = regFactFunc();

            regTests.getRegNum('CL 987 654');
            regTests.testRegNum();
            regTests.getRegNum('CY-937-694');
            regTests.testRegNum();
            regTests.getRegNum('CJ 333654');
            regTests.testRegNum();
            regTests.getRegNum('CL 127 374');
            regTests.testRegNum();
            regTests.getRegNum('CY 944 114');
            regTests.testRegNum();
            regTests.getRegNum('CL 327 124');
            regTests.testRegNum();

            assert.deepEqual(['CL 987 654', 'CL 127 374', 'CL 327 124'], regTests.filtering("stellenbosch"));
        })

        it('Should be able return a list of all Paarl registration numbers added', function(){

            var regTests = regFactFunc();

            regTests.getRegNum('CJ 987 654');
            regTests.testRegNum();
            regTests.getRegNum('CY-937-694');
            regTests.testRegNum();
            regTests.getRegNum('CA 333654');
            regTests.testRegNum();
            regTests.getRegNum('CJ 127 374');
            regTests.testRegNum();
            regTests.getRegNum('CY 944 114');
            regTests.testRegNum();
            regTests.getRegNum('CJ 327 124');
            regTests.testRegNum();

            assert.deepEqual(['CJ 987 654', 'CJ 127 374', 'CJ 327 124'], regTests.filtering("paarl"));
        })

        it('Should be able return a list of all Bellville registration numbers added', function(){

            var regTests = regFactFunc();

            regTests.getRegNum('CY 987 654');
            regTests.testRegNum();
            regTests.getRegNum('CJ-937-694');
            regTests.testRegNum();
            regTests.getRegNum('CA 333654');
            regTests.testRegNum();
            regTests.getRegNum('CY 127 374');
            regTests.testRegNum();
            regTests.getRegNum('CA 944 114');
            regTests.testRegNum();
            regTests.getRegNum('CY 327 124');
            regTests.testRegNum();

            assert.deepEqual(['CY 987 654', 'CY 127 374', 'CY 327 124'], regTests.filtering("bellville"));
        })
    })

    describe ("Should be able to clear stored registration numbers", function(){
        it('Should be able return an empty list of registration numbers when clear function is executed', function(){

            var regTests = regFactFunc();

            regTests.getRegNum('CA 987 654');
            regTests.testRegNum();
            regTests.getRegNum('CY-937-694');
            regTests.testRegNum();
            regTests.getRegNum('CJ 333654');
            regTests.testRegNum();

            regTests.clear()

            assert.deepEqual([], regTests.values().theArr);
        })
    })

    describe ("Should be able to return appropriate confirmation messages", function(){
        it('Should be able to return message when registration number has been entered', function(){

            var regTests = regFactFunc();

            regTests.getRegNum('CA 987 654');
            regTests.testRegNum();

            assert.equal('Registration number added.', regTests.values().theAdd);
        })

        it('Should be able to return message when clear button has been pressed', function(){

            var regTests = regFactFunc();

            regTests.getRegNum('CA 987 654');
            regTests.testRegNum();
            regTests.clear();

            assert.equal('Registration numbers have been cleared.', regTests.values().theRegClear);
        })
    })

    describe ("Should be able to return appropriate error messages", function(){
        it('Should be able to return error message when no registration number has been entered', function(){

            var regTests = regFactFunc();

            regTests.getRegNum('');

            assert.equal('Oops, no Registration number entered.', regTests.testRegNum());
        })

        it('Should be able to return error message when registration number has been entered more than once', function(){

            var regTests = regFactFunc();

            regTests.getRegNum('CY-555-777');
            regTests.testRegNum();

            assert.equal('Registration number has already been inserted.', regTests.testRegNum());
        })

        it('Should be able to return error message when incorrect characters has been entered', function(){

            var regTests = regFactFunc();

            regTests.getRegNum('CA b#$ 79!');
            

            assert.equal('Oops, no Registration number entered.', regTests.testRegNum());
        })

        it('Should be able to return error message when registration number entered has less than 9 characters and more than 10 characters', function(){

            var regTests = regFactFunc();

            regTests.getRegNum('CA 333 4444');

            assert.equal('Oops, no Registration number entered.', regTests.testRegNum());
        })

        it('Should be able to return error message when no filter option is selected', function(){

            var regTests = regFactFunc();

            regTests.getRegNum('CA 123 456');
            regTests.testRegNum()

            assert.equal('Oops, no town selected.', regTests.noRadioBut());
        })
    })
})