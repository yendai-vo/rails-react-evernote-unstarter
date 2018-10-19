class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :title
      t.belongs_to :album, foreign_key: true

      t.timestamps
    end
  end
end
