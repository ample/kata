require_relative '../spec/spec_helper'
require_relative './main'

describe 'main' do

  it 'returns the position of the vowel matrix' do
    expect(vowel_position?(["aqrst", "ukaei", "ffooo"])).to eq('1-2')
  end

  it 'returns "not found" when the vowel matrix does not exist' do
    expect(vowel_position?(["gg", "ff"])).to eq('not found')
  end

end
