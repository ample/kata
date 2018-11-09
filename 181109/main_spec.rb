require_relative '../spec/spec_helper'
require_relative './main'

describe 'main' do

  it 'returns false when scenario is not found' do
    %w{aa6?9 aa6???9}.each { |str| expect(pattern_exists?(str)).to eq(false) }
  end

  it 'returns true when scenario is found' do
    %w{c?7??sss?3rr1??????5 r1???5acc?7??sss?3r}.each { |str| expect(pattern_exists?(str)).to eq(true) }
  end

end
