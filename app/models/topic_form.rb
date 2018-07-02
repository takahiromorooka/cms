class TopicForm
  include ActiveModel::Model

  attr_accessor :title, :status

  def search
    Topic.ransack(
        title_cont: self.title,
        status_eq: self.status
    ).result
  end

end
