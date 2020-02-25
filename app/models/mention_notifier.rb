class MentionNotifier
  def self.call(comment_id)
    new(comment_id).call
  end

  attr_accessor :comment_id
  def initialize(comment_id)
    @comment_id = comment_id
  end

  def call
    return unless comment

    users.each do |user|
      # do in a background job
      Rails.logger.info "#{user.name} was mentioned"
      # do in a background job
    end
  end

  private

  def comment
    @comment ||= Comment.find_by(id: comment_id)
  end

  def users
    comment.content.body.attachables.select { |o| o.class == User }.uniq
  end
end
