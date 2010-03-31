#!/usr/bin/ruby

# Calculates the gear score for a character.
# Usage:  armory_parse.rb <realm> <name>

require 'net/http'
require 'rexml/document'

def getResponse(url)
  Net::HTTP.start("www.wowarmory.com", 80) do |http|
    result = http.get(url,
        "User-Agent" => "Mozilla/5.0 Gecko/20070219 Firefox/2.0.0.2")
  end
end

def getItem(id)
  getResponse("/item-info.xml?i=#{id}")
end

if (ARGV.length > 0) then realm = ARGV[0] end
if (ARGV.length > 1) then name = ARGV[1] end

response = getResponse("/character-sheet.xml?r=#{realm}&n=#{name}")

gearScore = 0
document = REXML::Document.new response.body
document.elements[1].elements.each("characterInfo/characterTab/items/item") do |element|
  icon = element.attributes['icon'] 
  if (!icon.include?("tabard") && !icon.include?("ammo") && !icon.include?("shirt")) then
    item = getItem(element.attributes['id'])
    itemDocument = REXML::Document.new item.body
    itemDocument.elements[1].elements.each('itemInfo/item') do |it|
      level = it.attributes["level"]
      gearScore = gearScore + level.to_i
      puts it.attributes["name"] + ":" + level
    end
  end
end
puts "=====\nGear score for #{name}: #{gearScore}"
puts "Reference:  Blue (Superior):#{17*187} Heroic:#{8*187 + 9*200} Naxx10:#{17*200} Naxx25 (Epic):#{17*213} Max:#{17*226}"



