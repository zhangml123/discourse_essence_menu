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
    #@options[:order] = "essence"
    #topics = create_list(:essence, ascending: "true")
    #topics = create_list(:essence, unordered: false) do |topics|
     # topics.where('pinned_globally IS NOT NULL OR pinned_until > now()').order('pinned_at DESC')
    #end
    #topics = create_list(:essence) { |l| l.where('pinned_globally IS NOT NULL OR pinned_until > now()').order('pinned_at DESC') }
    topics = create_list(:essence) { |l| l.where('topics.pinned_globally OR topics.pinned_until > now()').order('topics.pinned_at DESC') }
  end
end   


load File.expand_path('../lib/discourse-essence/engine.rb', __FILE__)