import 'dotenv/config'

import { container } from '../container'
import { TYPES } from '../types'
import { IServer } from '../api/http/server'

const server = container.get<IServer>(TYPES.Server)
server.start();
