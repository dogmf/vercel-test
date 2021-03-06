import { FC } from 'react'
import { Helmet } from 'react-helmet'
import Container from '../Components/Container'

const About: FC = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name="description" content="About page" />
      </Helmet>
      <Container>
        <div className="content">
          <h2>Проба пера с новым стеком под реакт</h2>
          <p>
            Идея заключается в том, что бы сварить проект на новом стеке и тем
            самым проверить пригодность этих технологий/библиотек.
          </p>
          <h3>Решаемая проблема</h3>
          <p>
            Каждый раз начиная проект приходится воротить некий велосипед для
            работы с роутингом в реакте. Создание и настройка реестра путей
            занимает большое время и не всегда проходит гладко, так как нет
            устоявшегося подхода. <code>react-router</code> предлагает
            низкоуровневый инструмент для решения проблемы. Хотелось бы
            что-нибудь посерьезнее. Вариантов два
            <ul>
              <li>
                <code>Next.js</code>
              </li>
              <li>
                <code>React-location</code>
              </li>
            </ul>
            В этот раз пробую <code>React-location</code>.
          </p>
        </div>
      </Container>
    </>
  )
}

export default About
