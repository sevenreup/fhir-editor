import { QuestionaireItemContainerProps } from "../containers/QuestionareContainer"
import BlockHeader from "../editable/BlockHeader"
import Card from "../general/Card"

const GroupBlock = (props: QuestionaireItemContainerProps) => {
    const { question } = props
  return (
    <Card>
        <BlockHeader {...props} />
        <h3>{question.title}</h3>
    </Card>
  )
}

export default GroupBlock