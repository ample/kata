def vowel_position?(arr)
  position = arr.map(&:chars)[0..-2].each_with_index.map { |row, x|
    row[0..-2].each_with_index.map { |col, y|
      [x,y] if [arr[x][y], arr[x + 1][y], arr[x][y + 1], arr[x + 1][y + 1]]
        .map { |a| %w{a e i o u}.include?(a) }.uniq.eql?([true])
    }.compact
  }.flatten(1).sort_by(&:sum).first
  position ? position.join('-') : 'not found'
end
