import { searchYoutube } from "../helpers/ytScrape.js"
import test from "node:test";
import assert from 'node:assert';

test('ytScrape does not throw an error', async () => {
    const result = await searchYoutube('california girls')
    if (!result) {
        assert.fail('ytScrape threw an error.')
    }
})
test('ytScrape returns the california girls music video', async () => {
    const result = await searchYoutube('california girls')
    assert.equal(result['id'], 'F57P9C4SAW4')
})
