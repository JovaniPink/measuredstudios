/** @jsx jsx */
import { jsx, Styled, useColorMode } from 'theme-ui'
import { Link } from 'gatsby'
import {
  FaTwitter as Twitter,
  FaFacebook as Facebook,
  FaInstagram as Instagram,
} from 'react-icons/fa'

const modes = [
  'light',
  'dark',
]

const ColorButton = ({
  mode,
  ...props
}) =>
  <button
    {...props}
    title='Cycle Color Mode'
    sx={{
      display: 'inline-block',
      appearance: 'none',
      bg: 'transparent',
      color: 'inherit',
      p: 1,
      m: 0,
      border: 0,
      borderRadius: 9999,
      ':hover,:focus': {
        color: 'primary',
        boxShadow: '0 0 0 3px',
        outline: 'none',
      }
    }}>
    <svg
      viewBox='0 0 32 32'
      width='24'
      height='24'
      fill='currentcolor'
      sx={{
        display: 'block',
      }}>
      <circle
        cx='16'
        cy='16'
        r='14'
        fill='none'
        stroke='currentcolor'
        strokeWidth='4'
      />
      <path
        d={`
          M 16 0
          A 16 16 0 0 0 16 32
          z
        `}
      />
    </svg>
  </button>

const Draft = () => (
  <div
    sx={{
      p: 3,
      my: 4,
      fontWeight: 'bold',
      color: 'background',
      bg: 'accent',
    }}>
    ⚠️ You are viewing an draft post, and this may not be ready for primetime.
  </div>
)

export default props => {
  const [mode, setMode] = useColorMode()
  const cycleMode = e => {
    const i = modes.indexOf(mode)
    const n = (i + 1) % modes.length
    setMode(modes[n])
  }
  const title = props.pageContext?.frontmatter?.title
  let date = props.pageContext?.frontmatter?.date
  if (date) date = new Date(date).toLocaleDateString('en-US', {
    timeZone: 'UTC',
  })
  const draft = props.pageContext?.frontmatter?.draft

  return (
    <div
      sx={{
        variant: 'styles.root',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <header
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          maxWidth: 'wide',
          mx: 'auto',
          px: 3,
          py: 4,
        }}>
        <Styled.a
          as={Link}
          to='/'
          sx={{
            variant: 'styles.navitem',
            fontSize: 0,
            mr: 3,
          }}>
          Measured Studios
        </Styled.a>
        {/* <Styled.a
          as={Link}
          to='/blog'
          sx={{
            variant: 'styles.navitem',
            fontSize: 0,
            mr: 3,
          }}>
          Blog
        </Styled.a> */}
        <div sx={{ mx: 'auto' }} />
        <ColorButton
          mode={mode}
          onClick={cycleMode}
        />
      </header>
      <main
        sx={{
          width: '100%',
          maxWidth: 'wide',
          px: 3,
          mx: 'auto',
          flex: '1 1 auto',
        }}>
        <div
          sx={{
            maxWidth: !!title ? 'container' : null,
          }}>
          {draft && <Draft />}
          {title && (
            <Styled.h1>
              {title}
            </Styled.h1>
          )}
          {date && (
            <div
              sx={{
                variant: 'text.small',
                fontWeight: 'bold',
              }}>
              {date}
            </div>
          )}
          {props.children}
        </div>
      </main>
      <footer
        sx={{
          px: 3,
          py: 5,
          width: '100%',
          maxWidth: 'wide',
          mx: 'auto',
        }}>
        <div
          sx={{
            py: 4,
            display: 'flex',
            justifyContent: 'center',
          }}>
          <a
            href='https://twitter.com/MeasuredStudios'
            title='Twitter'
            sx={{
              variant: 'styles.navitem',
              ml: 2,
              mr: 3,
            }}>
            <Twitter size={24} />
          </a>
          <a
            href='https://www.facebook.com/MeasuredStudios/'
            title='Facebook'
            sx={{
              variant: 'styles.navitem',
              ml: 2,
              mr: 3,
            }}>
            <Facebook size={24} />
          </a>
          <a
            href='https://www.instagram.com/measuredstudios/'
            title='Instagram'
            sx={{
              variant: 'styles.navitem',
            }}>
            <Instagram size={24} />
          </a>
        </div>
        <div
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            fontSize: 0,
          }}>
          <Styled.a
            as={Link}
            to='/'
            sx={{
              variant: 'styles.navitem',
              mr: 4,
            }}>
            Measured Studios
          </Styled.a>
          <Styled.a
            as={Link}
            to='/about'
            sx={{
              variant: 'styles.navitem',
              mr: 4,
            }}>
            About
          </Styled.a>
          <Styled.a
            as={Link}
            to='/blog'
            sx={{
              variant: 'styles.navitem',
              mr: 4,
            }}>
            Blog
          </Styled.a>
          <div sx={{ mx: 'auto' }} />
          <div sx={{ my: 2 }}>© 2020 Measured Studios</div>
        </div>
      </footer>
    </div>
  )
}
