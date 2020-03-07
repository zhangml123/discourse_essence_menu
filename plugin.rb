# name: discourse essence menu
# about: discourse essence menu
# version: 0.1
# authors: null
# url: https://github.com/zhangml123/discourse_essence_menu

enabled_site_setting :discourse_essence

Discourse.top_menu_items.push(:essence)
Discourse.anonymous_top_menu_items.push(:essence)
Discourse.filters.push(:essence)
Discourse.anonymous_filters.push(:essence) 

require_dependency 'topic_query'
class ::TopicQuery
  SORTABLE_MAPPING["essence"] = "custom_fields.event_start"

  def list_essence
    @options[:order] = "essence"
    #topics = create_list(:essence, ascending: "true")
    topics = create_list(:read, unordered: true) do |topics|
      topics.where('tu.last_visited_at IS NOT NULL').order('tu.last_visited_at DESC')
    end
  end
end   


load File.expand_path('../lib/discourse-essence/engine.rb', __FILE__)