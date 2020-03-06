class DiscourseEssenceConstraint
  def matches?(request)
    SiteSetting.discourse_essence_menu
  end
end