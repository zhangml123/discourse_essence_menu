class DiscourseEssenceConstraint
  def matches?(request)
    SiteSetting.discourse_essence
  end
end