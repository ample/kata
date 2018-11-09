def pattern_exists?(str)
  matches = str.gsub(/[^0-9\?]/, '').scan(/([0-9]\?\?\?[0-9])/).flatten
  matches.map { |s| s[0].to_i + s[-1].to_i == 10 }.uniq.eql?([true])
end
